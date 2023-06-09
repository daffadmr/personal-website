"use client"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={false} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default Providers