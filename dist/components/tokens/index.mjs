//#region src/styles/auto/tokens.js
var e = {
	color: {
		primary: "#e91c24",
		primaryDark: "#a21218",
		secondary: "#426587",
		secondaryDark: "#2c3c4e",
		black: "#191919",
		greyDark: "#434343",
		grey: "#767676",
		greyLight: "#d6d6d6",
		greyLighter: "#e6e6e6",
		greyPale: "#f5f5f5",
		greyFaint: "#fafafa",
		white: "#ffffff",
		purple: "#636FAC",
		purpleLight: "#D3DAE9",
		teal: "#3A8082",
		tealLight: "#C8DAD7",
		blue: "#026BC8",
		success: "#007c24",
		warning: "#f4c83c",
		error: "#d31820",
		info: "#b8d9f2"
	},
	gradient: {
		redToDarkRed: "linear-gradient(135deg,rgb(233,28,36) 0%,rgb(25,25,25) 100%)",
		darkGreyToBlack: "linear-gradient(135deg,rgb(118,118,118) 0%,rgb(25,25,25) 100%)"
	},
	spacing: {
		x2Small: "0.44rem",
		xSmall: "0.67rem",
		small: "min(1rem, 1vw)",
		medium: "min(1.5rem, 2vw)",
		large: "min(2.25rem, 3vw)",
		xLarge: "min(3.38rem, 4vw)",
		x2Large: "min(5.06rem, 6vw)"
	},
	fontFamily: { inter: "Inter, sans-serif" },
	fontSize: {
		xSmall: "clamp(0.65rem, 0.65rem + ((1vw - 0.2rem) * 0.167), 0.75rem)",
		small: "clamp(0.725rem, 0.725rem + ((1vw - 0.2rem) * 0.292), 0.9rem)",
		medium: "clamp(0.825rem, 0.825rem + ((1vw - 0.2rem) * 0.292), 1rem)",
		large: "clamp(0.95rem, 0.95rem + ((1vw - 0.2rem) * 0.292), 1.125rem)",
		xLarge: "clamp(1.125rem, 1.125rem + ((1vw - 0.2rem) * 0.208), 1.25rem)",
		x2Large: "clamp(1.25rem, 1.25rem + ((1vw - 0.2rem) * 0.417), 1.5rem)",
		headingSmall: "clamp(1.25rem, 1.25rem + ((1vw - 0.2rem) * 0.417), 1.5rem)",
		headingMedium: "clamp(1.5rem, 1.5rem + ((1vw - 0.2rem) * 0.833), 2rem)",
		headingLarge: "clamp(1.75rem, 1.75rem + ((1vw - 0.2rem) * 1.25), 2.5rem)",
		headingXLarge: "clamp(2rem, 2rem + ((1vw - 0.2rem) * 1.667), 3rem)",
		headingPrimary: "clamp(2.25rem, 2.25rem + ((1vw - 0.2rem) * 2.083), 3.5rem)"
	},
	shadow: {
		natural: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		sharp: "6px 6px 0px rgba(0, 0, 0, 0.2)"
	},
	fontWeight: {
		light: "300",
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700"
	},
	lineHeight: {
		tight: "1.3",
		normal: "1.6",
		loose: "1.8"
	},
	radius: {
		sm: "2px",
		md: "4px",
		lg: "8px",
		xl: "12px",
		full: "9999px"
	},
	layout: {
		contentSize: "1024px",
		wideSize: "1280px",
		maxSize: "1536px"
	}
};
//#endregion
export { e as rdsTokens };
