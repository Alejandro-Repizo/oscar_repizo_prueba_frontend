import css from "./Forms.module.css";

export const Forms = () => {
	return (
		<article className={css["wrapper"]}>
			<div>
				<Select />
				<CheckBox />
			</div>
			<Radio />
			<Form />
		</article>
	);
};

const CheckBox = () => {
	return (
		<fieldset className={css["fieldset"]}>
			<label>
				<span>Option 1</span>
				<input type="checkbox" />
			</label>
			<label>
				<span>Option 2</span>
				<input type="checkbox" />
			</label>
			<label>
				<span>Option 3</span>
				<input type="checkbox" />
			</label>
			<label>
				<span>Option 4</span>
				<input type="checkbox" />
			</label>
		</fieldset>
	);
};

const Select = () => {
	return (
		<select className={css["select"]}>
			<option value="1">Select</option>
		</select>
	);
};

const Radio = () => {
	return (
		<fieldset className={css["fieldset"]}>
			<label>
				<span>Option 1</span>
				<input type="radio" name="radio"/>
			</label>
			<label>
				<span>Option 2</span>
				<input type="radio" name="radio"/>
			</label>
			<label>
				<span>Option 3</span>
				<input type="radio" name="radio"/>
			</label>
			<label>
				<span>Option 4</span>
				<input type="radio" name="radio"/>
			</label>
		</fieldset>
	);
};

const Form = () => {
	return (
		<form className={css["form"]}>
			<label>
				<span>Name:</span>
				<input type="text" autoComplete="false"/>
			</label>

			<label>
				<span>Email:</span>
				<input type="email" autoComplete="false"/>
			</label>

			<textarea placeholder="Render the input text information here..."/>

			<button type="submit">Submit</button>
		</form>
	);
};
