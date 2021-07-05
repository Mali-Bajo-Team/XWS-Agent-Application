import { toast } from 'react-toastify';

export function warningToast(message) {
	return toast.warn(message, {
		position: 'top-left',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
