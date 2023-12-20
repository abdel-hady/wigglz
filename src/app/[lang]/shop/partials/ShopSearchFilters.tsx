import React from 'react';

export default function ShopSearchFilters() {
	return (
		<>
			<div className=" ">
				<div className="mb-2">
					<h6 className="mb-0 d-none d-md-block">
						<strong>Search</strong>
					</h6>
				</div>
				<div className="search_input_group mb-5 d-none d-md-block">
					<div className="d-flex justify-content-between">
						<input
							type="text"
							placeholder="Search"
							className="flex-grow-1 px-2 filter_search border-0"
						/>
						<button className="search_button" type="button">
							<i className="fa fa-search" />{' '}
						</button>
						<div className="close_btn d-flex justify-content-center align-items-center">
							<i className="fa fa-times" />
						</div>
					</div>
				</div>
			</div>
			<div className="mb-3 d-none d-md-block">
				<div className="d-flex flex-row justify-content-between align-items-center">
					<h6 className="mb-0">
						<strong>Shop by Filters</strong>
					</h6>
				</div>
			</div>
			<div className="mb-3 filter_current_content d-none">
				<div>
					<small>Current Filter:</small>
				</div>
				<div className="filter_current_container d-flex flex-wrap flex-row" />
			</div>
			<div className="filter_section">
				<div className="filter_body ">
					<div className="filter_option p-2  d-flex flex-row  align-items-center  filter_option_is_new_product_1">
						<div className="check_space mr-2">
							<i className="fa fa-check" />
						</div>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<div className="filter_option_label">What's New</div>
					</div>
					<div className="filter_option p-2  d-flex flex-row  align-items-center  filter_option_on_sale_1">
						<div className="check_space mr-2">
							<i className="fa fa-check" />
						</div>
						<div className="filter_option_label">Sale</div>
					</div>
					<div className="filter_option p-2  d-flex flex-row  align-items-center  filter_option_gift_card_1">
						<div className="check_space mr-2">
							<i className="fa fa-check" />
						</div>
						<div className="filter_option_label">e-Gift Card</div>
					</div>
					<div className="d-none">
						<div className="filter_option p-2  d-flex flex-row  align-items-center filter_option_holiday_1">
							<div className="check_space mr-2">
								<i className="fa fa-check" />
							</div>
							<div className="filter_option_label">
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								Valentine's Day Collection 💕
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
