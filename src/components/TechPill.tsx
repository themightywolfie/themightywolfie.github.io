import { getTechIcon } from "../lib/techIcons";

const variants = {
  neutral: {
    pill: "px-3 py-1.5 text-sm gap-2 bg-background text-text-primary border border-border",
    icon: 16,
    glyph: "text-accent",
  },
  accent: {
    pill: "px-2.5 py-1 text-xs gap-1.5 bg-accent-soft text-accent-strong",
    icon: 14,
    glyph: "text-accent-strong",
  },
};

export default function TechPill({
  name,
  variant = "neutral",
}: {
  name: string;
  variant?: keyof typeof variants;
}) {
  const icon = getTechIcon(name);
  const style = variants[variant];

  return (
    <span className={"inline-flex items-center font-medium rounded-full " + style.pill}>
      {icon && "logo" in icon && (
        <img
          src={icon.logo}
          alt=""
          width={style.icon}
          height={style.icon}
          loading="lazy"
          className="shrink-0 object-contain"
          style={{ width: style.icon, height: style.icon }}
        />
      )}
      {icon && "glyph" in icon && (
        <icon.glyph size={style.icon} className={"shrink-0 " + style.glyph} aria-hidden="true" />
      )}
      {name}
    </span>
  );
}
