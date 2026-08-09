export const metadata = {
  title: 'Shaykh Ibrahim Sodiqi',
  description: 'Spreading Qur\'an & Sunnah Upon Understanding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
