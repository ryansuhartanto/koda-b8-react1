import React from "react";

// oxlint-disable-next-line no-unassigned-import
import "./style.css";

function InputNumber() {
	const [value, setValue] = React.useState(0);

	return (
		<div className="flex flex-row items-stretch font-mono outline-1 outline-gray-300 bg-gray-50 rounded-xl overflow-hidden *:p-2 [&>button]:w-[2.5em] [&>button]:cursor-pointer">
			<button
				type="button"
				className="hover:bg-gray-300"
				onClick={() => setValue(value - 1)}
			>
				-
			</button>
			<input
				type="number"
				className="w-16 no-spinner text-center"
				value={value}
				onChange={(e) => setValue(Number.parseInt(e.target.value, 10))}
			/>
			<button
				type="button"
				className="hover:bg-gray-300"
				onClick={() => setValue(value + 1)}
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
