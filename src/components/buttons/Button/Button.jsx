import { BUTTONS_KIND } from "./constants/buttonsKind.js";
import css from "./style.module.css";
import { getFinalClassName } from "./utils/getFinalClassName.js";

export default function Button({
	disabled,
	className: outerClassName,
	kind: outerKind,
	isVisible = true,
	text,
	...props
}) {
	if (!isVisible) return null;
	if (outerKind && !BUTTONS_KIND[outerKind]) throw TypeError("Err kind");
	const kind = disabled ? BUTTONS_KIND.disabled : outerKind;
	const modifier = BUTTONS_KIND[kind] || BUTTONS_KIND.a;
	const className = getFinalClassName({
		css,
		local: `btn ${modifier}`,
		outer: outerClassName
	});

	return (
		<button {...props} disabled={disabled} className={className}>
			{text || "Submit"}
		</button>
	);
}
