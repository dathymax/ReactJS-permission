import React, { useEffect } from "react";

const Form = () => {
	return (
		<div>
			<form
				action=""
				className="form"
				onSubmit={(e) => e.preventDefault()}
			>
				<div>
					<span>Tài khoản</span>
					<input type="text" />
				</div>
				<div>
					<span>Mật khẩu</span>
					<input type="text" />
				</div>
				<div>
					<input type="submit" value="Login" />
				</div>
			</form>
		</div>
	);
};

export default Form;
