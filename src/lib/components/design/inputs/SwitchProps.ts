export interface SwitchChangeEventProps {
	checked: boolean;
}

export type SwitchChangeEvent = CustomEvent<SwitchChangeEventProps>;

export interface SwitchProps {
	checked?: boolean;

	onChangeEvent?: SwitchChangeEvent;
}
