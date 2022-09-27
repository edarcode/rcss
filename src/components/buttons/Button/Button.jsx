import { BUTTONS_KIND } from "./constants/buttonsKind.js";
import css from "./style.module.css";
import { getFinalClassName } from "./utils/getFinalClassName.js";

export default function Button({
	disabled,
	className: outerClassName,
	kind: outerKind,
	isVisible,
	text,
	...props
}) {
	if (outerKind && !BUTTONS_KIND[outerKind]) throw TypeError("Err kind");
	if (isVisible) return null;
	const kind = disabled ? BUTTONS_KIND.disabled : outerKind;
	const modifier = BUTTONS_KIND[kind];
	const className = getFinalClassName({
		css,
		local: `btn ${modifier}`,
		outer: outerClassName
	});

	return (
		<button {...props} disabled={disabled} className={className}>
			{text || "I think forget send me text 😁"}
		</button>
	);
}
