import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <div className={cn(
      "space-y-4",
      centered && "text-center",
      className
    )}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}