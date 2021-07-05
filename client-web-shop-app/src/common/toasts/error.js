import { toast } from 'react-toastify';

export function errorToast(message) {
	return toast.error(message, {
		position: 'top-left',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
