import { Menu, Transition } from '@headlessui/react';
import React, {
	Fragment,
} from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useLocaleProvider } from '@/app/providers/LocaleProvider';


export default function DropdownLocale() {
	const {
		setNewLocale, currentLocaleInfo, otherLocaleInfoList,
	} = useLocaleProvider();

	return (
		<Menu as="div" className="relative inline-block text-left ">
			<div className="h-100 d-flex justify-content-center align-items-center">
				<Menu.Button style={{ background: 'transparent', border: 'none' }} className="d-flex justify-content-center align-items-center rounded-md px-2 py-4 font-medium outline-none border-none">
					<div className="d-flex gap-3">
						<Image src={currentLocaleInfo.icon} width="20" height="20" alt="English flag icon" />
						<span className="hidden display-md-block">{currentLocaleInfo.name}</span>
					</div>
					<ChevronDownIcon
						className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
						aria-hidden="true"
						style={{ width: '20px', height: '20px' }}
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="position-absolute lang-dropdown right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1">
						{otherLocaleInfoList.map((obj) => (
							<Menu.Item key={obj.name}>
								{({ active }) => (
									<button
										className={`${active ? 'bg-greenish bg-opacity-60' : 'text-gray-900'} group d-flex w-100 items-center gap-3 rounded-md px-2 py-2 text-sm`}
										type="button"
										onClick={() => { setNewLocale(obj.locale); }}
										style={{ border: 'none', background: 'transparent' }}
									>
										<Image src={obj.icon} width="25" height="25" alt="UAE flag icon" />

										<span>{obj.name}</span>
									</button>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
