import { useCallback, useEffect, useState } from 'react'
import { terminalCommands } from '#/data/portfolio'
import { useTypewriter } from '#/hooks/useTypewriter'
import { cn } from '#/lib/utils'

type Step = 'command' | 'output' | 'done'

function TerminalCursor({ visible }: { visible: boolean }) {
  if (!visible) return null

  return (
    <span
      className="terminal-cursor ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.1em] bg-accent/80 align-middle"
      aria-hidden="true"
    />
  )
}

function OutputLine({ line, delayMs }: { line: string; delayMs: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delayMs)
    return () => clearTimeout(timer)
  }, [delayMs, line])

  return (
    <p
      className={cn(
        'pl-5 text-muted-foreground',
        visible && 'terminal-line-enter',
      )}
      style={visible ? { animationDelay: '0ms' } : { opacity: 0 }}
    >
      {line}
    </p>
  )
}

function AnimatedCommand({
  command,
  output,
  isPlaying,
  onDone,
}: {
  command: string
  output: readonly string[]
  isPlaying: boolean
  onDone: () => void
}) {
  const [step, setStep] = useState<Step>('command')
  const [outputIndex, setOutputIndex] = useState(0)

  const { displayed, isComplete } = useTypewriter({
    text: command,
    baseSpeed: 52,
    enabled: isPlaying && step === 'command',
  })

  useEffect(() => {
    if (!isPlaying) {
      setStep('command')
      setOutputIndex(0)
    }
  }, [isPlaying, command])

  useEffect(() => {
    if (isComplete && step === 'command') {
      const timer = setTimeout(() => setStep('output'), 320)
      return () => clearTimeout(timer)
    }
  }, [isComplete, step])

  useEffect(() => {
    if (step !== 'output') return

    if (outputIndex < output.length) {
      const timer = setTimeout(() => setOutputIndex((i) => i + 1), 220)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setStep('done')
      onDone()
    }, 700)
    return () => clearTimeout(timer)
  }, [step, outputIndex, output.length, onDone])

  if (!isPlaying && step === 'command') return null

  const visibleOutput = output.slice(0, step === 'done' ? output.length : outputIndex)

  return (
    <div className="terminal-block-enter space-y-1">
      <div className="flex items-start gap-2">
        <span className="text-accent select-none transition-opacity duration-300">&gt;</span>
        <span className="transition-opacity duration-200">
          {step === 'command' ? displayed : command}
          <TerminalCursor visible={step === 'command' && !isComplete} />
        </span>
      </div>
      {(step === 'output' || step === 'done') &&
        visibleOutput.map((line, i) => (
          <OutputLine key={`${line}-${i}`} line={line} delayMs={i * 40} />
        ))}
    </div>
  )
}

function StaticCommand({
  command,
  output,
}: {
  command: string
  output: readonly string[]
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-start gap-2">
        <span className="text-accent select-none">&gt;</span>
        <span>{command}</span>
      </div>
      {output.map((line) => (
        <p key={line} className="pl-5 text-muted-foreground">
          {line}
        </p>
      ))}
    </div>
  )
}

export function TerminalWindow() {
  const [finishedCount, setFinishedCount] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const activeIndex = finishedCount
  const allDone = finishedCount >= terminalCommands.length

  const handleDone = useCallback(() => {
    setFinishedCount((c) => c + 1)
  }, [])

  useEffect(() => {
    if (!allDone) return

    const fadeTimer = setTimeout(() => setIsFadingOut(true), 1800)

    const resetTimer = setTimeout(() => {
      setIsFadingOut(false)
      setFinishedCount(0)
      setCycle((c) => c + 1)
    }, 2400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(resetTimer)
    }
  }, [allDone, cycle])

  return (
    <div
      className="flex h-[28rem] w-[28rem] max-w-full flex-col overflow-hidden border border-border bg-surface/80 shadow-[var(--shadow-lg)] backdrop-blur-sm glow-accent-soft"
      aria-label="Terminal preview"
      role="region"
    >
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-border px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 bg-zinc-600" />
          <span className="h-3 w-3 bg-zinc-600" />
          <span className="h-3 w-3 bg-zinc-600" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted">~/portfolio</span>
      </div>

      <div
        className={cn(
          'min-h-0 flex-1 overflow-hidden p-5 font-mono text-sm leading-relaxed text-foreground',
          isFadingOut && 'terminal-content-fade-out',
        )}
      >
        <div className="space-y-4">
        {terminalCommands.map((cmd, index) => {
          if (index < finishedCount) {
            return (
              <StaticCommand
                key={`${cycle}-${cmd.command}`}
                command={cmd.command}
                output={cmd.output}
              />
            )
          }

          if (index === activeIndex && !allDone) {
            return (
              <AnimatedCommand
                key={`${cycle}-${cmd.command}-active`}
                command={cmd.command}
                output={cmd.output}
                isPlaying={true}
                onDone={handleDone}
              />
            )
          }

          return null
        })}

        {allDone && !isFadingOut && (
          <div className="flex items-start gap-2 pt-1">
            <span className="text-accent select-none">&gt;</span>
            <TerminalCursor visible={true} />
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
