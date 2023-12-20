import { RefObject, useEffect, useRef } from 'react';

interface UseClickOutsideCloseProps {
	closeCb: () => void;
}

interface UseClickOutsideCloseReturn {
	outlayRef: RefObject<HTMLDivElement>;
}

const useClickOutsideClose = ({
	closeCb,
}: UseClickOutsideCloseProps): UseClickOutsideCloseReturn => {
	const outlayRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: any) => {
		if (outlayRef.current && !outlayRef.current.contains(event.target)) {
			closeCb();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return { outlayRef };
};

export default useClickOutsideClose;
