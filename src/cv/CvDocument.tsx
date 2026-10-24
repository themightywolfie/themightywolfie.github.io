import type { ReactNode } from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  about,
  certifications,
  contact,
  education,
  experience,
  hero,
  projects,
  skillCategories,
} from "../lib/data";

// Keep words whole instead of react-pdf's default mid-word hyphenation
Font.registerHyphenationCallback((word) => [word]);

const SITE_URL = "https://themightywolfie.github.io";

const colors = {
  text: "#1d1d1f",
  secondary: "#515154",
  muted: "#6e6e73",
  accent: "#6d28d9",
  rule: "#e5e5ea",
};

const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: colors.text,
  },
  name: { fontSize: 22, lineHeight: 1.15, fontFamily: "Helvetica-Bold", letterSpacing: -0.3 },
  title: { fontSize: 11, lineHeight: 1.3, color: colors.accent, fontFamily: "Helvetica-Bold", marginTop: 2 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", columnGap: 14, rowGap: 2, marginTop: 6, fontSize: 8.5, color: colors.secondary },
  contactLink: { color: colors.secondary, textDecoration: "none" },
  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    paddingBottom: 3,
    marginBottom: 7,
    borderBottomWidth: 0.75,
    borderBottomColor: colors.rule,
  },
  paragraph: { color: colors.secondary },
  stats: { flexDirection: "row", marginTop: 8 },
  stat: { flex: 1 },
  statValue: { fontSize: 14, lineHeight: 1.2, fontFamily: "Helvetica-Bold", color: colors.accent },
  statLabel: { fontSize: 8, color: colors.muted },
  columns: { flexDirection: "row", gap: 16 },
  column: { flex: 1 },
  entry: { marginBottom: 9 },
  compactEntry: { marginBottom: 4 },
  compactImpact: { color: colors.secondary },
  entryHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  entryTitle: { fontSize: 10.5, fontFamily: "Helvetica-Bold" },
  entryMain: { flex: 1, paddingRight: 12 },
  entryMeta: { fontSize: 8.5, color: colors.muted, flexShrink: 0, marginTop: 1.5 },
  entrySubtitle: { color: colors.accent, fontFamily: "Helvetica-Bold", fontSize: 9, marginBottom: 2 },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletMark: { width: 9, color: colors.accent },
  bulletText: { flex: 1, color: colors.secondary },
  badge: { fontSize: 8, color: colors.accent },
  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillLabel: { width: 128, fontFamily: "Helvetica-Bold" },
  skillList: { flex: 1, color: colors.secondary },
  link: { color: colors.accent, textDecoration: "none" },
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bullet} wrap={false}>
          <Text style={styles.bulletMark}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function CvDocument() {
  const contactLinks = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: stripProtocol(contact.linkedin), href: contact.linkedin },
    { label: stripProtocol(contact.github), href: contact.github },
    { label: stripProtocol(SITE_URL), href: SITE_URL },
  ];

  return (
    <Document
      title={`${hero.name} — CV`}
      author={hero.name}
      subject={hero.title}
      keywords={skillCategories.flatMap((c) => c.skills).join(", ")}
    >
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.name}>{hero.name}</Text>
          <Text style={styles.title}>{hero.title}</Text>
          <View style={styles.contactRow}>
            <Text>{experience[0].location}</Text>
            {contactLinks.map((item) => (
              <Link key={item.href} src={item.href} style={styles.contactLink}>
                {item.label}
              </Link>
            ))}
          </View>
        </View>

        <Section title="Summary">
          <Text style={styles.paragraph}>{about.bio}</Text>
          <View style={styles.stats}>
            {about.stats.map((stat) => (
              <View key={stat.label} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Certifications">
          {certifications.map((cert) => (
            <View key={cert.name} style={[styles.entryHeader, { marginBottom: 3 }]}>
              <Text style={styles.entryMain}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>{cert.name}</Text>
                <Text style={{ color: colors.muted }}>
                  {"  "}
                  {cert.issuer}
                  {cert.issued ? ` · ${cert.issued}` : ""}
                </Text>
              </Text>
              <Link src={cert.url} style={[styles.link, { fontSize: 8.5 }]}>
                Verify
              </Link>
            </View>
          ))}
        </Section>

        <Section title="Core Strengths">
          <View style={styles.columns}>
            {about.pillars.map((pillar) => (
              <View key={pillar.title} style={styles.column}>
                <Text style={styles.entryTitle}>{pillar.title}</Text>
                <Bullets items={pillar.points} />
              </View>
            ))}
          </View>
        </Section>

        <Section title="Experience">
          {experience.map((entry) => (
            <View key={entry.id} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{entry.company}</Text>
                <Text style={styles.entryMeta}>
                  {entry.dates} · {entry.location}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>{entry.role}</Text>
              <Bullets items={entry.bullets} />
            </View>
          ))}
        </Section>

        <Section title="Selected Projects">
          {projects.map((project) => {
            const company = experience.find((e) => e.id === project.experienceId)?.company;
            // Co-sell accelerators get full detail; the rest stay to one line to keep the CV at two pages
            const detailed = Boolean(project.badge);
            return (
              <View key={project.name} style={detailed ? styles.entry : styles.compactEntry} wrap={false}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryMain}>
                    {project.url ? (
                      <Link src={project.url} style={[styles.entryTitle, { color: colors.text, textDecoration: "none" }]}>
                        {project.name}
                      </Link>
                    ) : (
                      <Text style={styles.entryTitle}>{project.name}</Text>
                    )}
                    {project.badge && <Text style={styles.badge}>{"   "}{project.badge}</Text>}
                    {!detailed && <Text style={styles.compactImpact}>{"  —  "}{project.impact}</Text>}
                  </Text>
                  <Text style={styles.entryMeta}>
                    {company ? `${company} · ` : ""}
                    {project.dates}
                  </Text>
                </View>
                {detailed && (
                  <>
                    <Text style={styles.entrySubtitle}>{project.impact}</Text>
                    <Bullets items={project.highlights} />
                  </>
                )}
              </View>
            );
          })}
        </Section>

        <Section title="Skills">
          {skillCategories.map((category) => (
            <View key={category.label} style={styles.skillRow} wrap={false}>
              <Text style={styles.skillLabel}>{category.label}</Text>
              <Text style={styles.skillList}>{category.skills.join(", ")}</Text>
            </View>
          ))}
        </Section>

        <Section title="Education">
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{education.institution}</Text>
            <Text style={styles.entryMeta}>
              {education.graduation} · {education.location}
            </Text>
          </View>
          <Text style={styles.paragraph}>
            {education.degree} · CGPA {education.cgpa}
          </Text>
        </Section>
      </Page>
    </Document>
  );
}
