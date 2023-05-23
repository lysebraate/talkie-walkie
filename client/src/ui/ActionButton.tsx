import {Component} from "solid-js";

interface ActionButtonProps {
    onClick: () => void,
    label: string,
    disabled?: boolean
}
export const ActionButton: Component<ActionButtonProps> = ({ onClick, label, disabled  }) => {
    return (
        <button
            disabled={!!(disabled) ? disabled : false}
            onClick={onClick}
            class="border border-2 border-amber-500 bg-amber-400 hover:bg-amber-300 text-white rounded-lg m-3 p-2 font-logo font-semibold hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-75"
        >
            {label}
        </button>
    )
}