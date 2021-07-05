import { toast } from 'react-toastify';

export function successToast(message) {
	return toast.success(message, {
		style: { backgroundColor: '#22ad9a', color: 'white' },
		position: 'top-left',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
