'use client';

import React from 'react';
import Link from 'next/link';
import {
	Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

interface ActionProps {
	actionText: string;
	actionCb?: () => void;
	href?: string;
	actionSubmit: boolean;
}

interface GeneralModalProps {
	hideText?: string;
	title: string;
	description?: string;
	children?: React.ReactNode;
	isOpen: boolean;
	closeModal: () => void;
	actionProps?: ActionProps | null;
	isBtnLoading?: boolean;
}

export default function GeneralModal({
	hideText = 'hide', title,
	description = '', children, closeModal,
	isOpen, actionProps = null, isBtnLoading = false,
}: GeneralModalProps) {
	return (
		<div>
			<Modal isOpen={isOpen} toggle={closeModal}>
				<ModalHeader toggle={closeModal}>{title}</ModalHeader>
				<ModalBody>
					<p className="py-2 text-center" style={{ fontSize: '18px' }}>
						{description}
					</p>
					<div>
						{
							children
						}
					</div>
				</ModalBody>
				<ModalFooter>
					<div className="w-100 d-flex justify-content-between">
						<button
							type="button"
							className="btn text-greenish focus:outline-none focus-visible:outline-none"
							style={{ background: '#eee' }}
							onClick={closeModal}
						>
							{hideText}
						</button>
						{actionProps && actionProps.href && (
							<Link
								className="btn bg-golden text-white hover:text-greenish focus:outline-none focus-visible:outline-none"
								href={actionProps.href}
							>
								{actionProps.actionText}
							</Link>
						)}
						{
							actionProps && !actionProps.href && (
								<button
									type="button"
									disabled={isBtnLoading}
									className="btn rounded bg-primary text-white hover:text-greenish focus:outline-none focus-visible:outline-none"
									style={{ background: 'green' }}
									onClick={() => {
										if (actionProps.actionCb) {
											actionProps.actionCb();
										} if (actionProps.actionSubmit === false) {
											closeModal();
										}
									}}
								>
									{isBtnLoading ? (
										<div className="spinner-border" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									) : actionProps.actionText}
								</button>
							)
						}
					</div>
				</ModalFooter>
			</Modal>
		</div>
	);
}
