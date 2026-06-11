import React from "react";

// oxlint-disable-next-line no-unassigned-import
import "./style.css";

function InputNumber({ min = 0, max = 10 }) {
	const [value, setValue] = React.useState(min);
	const [canDec, setCanDec] = React.useState(false);
	const [canInc, setCanInc] = React.useState(true);

	/**
	 * @param {number} v
	 */
	function handleValue(v) {
		const clamped = Math.max(0, Math.min(10, Number.isNaN(v) ? 0 : v));

		setValue(clamped);
		setCanDec(clamped > min);
		setCanInc(clamped < max);
	}

	return (
		<div className="flex flex-row items-stretch font-mono outline-1 outline-gray-300 bg-gray-50 rounded-xl overflow-hidden *:p-2 [&>button]:w-[2.5em] [&>button]:cursor-pointer [&>button]:disabled:cursor-not-allowed">
			<button
				type="button"
				className="transition-colors hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-400"
				onClick={() => handleValue(value - 1)}
				disabled={!canDec}
			>
				-
			</button>
			<input
				type="number"
				className="w-16 no-spinner text-center"
				min={min}
				max={max}
				step={1}
				value={value}
				onChange={(e) => handleValue(Number.parseInt(e.target.value, 10))}
			/>
			<button
				type="button"
				className="transition-colors hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-400"
				onClick={() => handleValue(value + 1)}
				disabled={!canInc}
			>
				+
			</button>
		</div>
	);
}

export function App() {
	return (
		<div className="min-h-screen grid place-items-center">
			<InputNumber />
		</div>
	);
}
