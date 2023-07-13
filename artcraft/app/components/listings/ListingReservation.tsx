'use client';


import Button from "../Button";

interface ListingReservationProps {
    price: number;
    onSubmit: () => void;
    disabled?: boolean;
}

const ListingReservation: React.FC<
    ListingReservationProps
> = ({
    price,

    onSubmit,
    disabled,
}) => {
        return (
            <div
                className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
            >
                <div className="
      flex flex-row items-center gap-1 p-4">
                    <div className="text-2xl font-semibold">
                        $ {price}
                    </div>
                    <div className="font-light text-neutral-600">
                        night
                    </div>
                </div>

                <hr />
                <div className="p-4">
                    <Button
                        disable={disabled}
                        label="Reserve"
                        onClick={onSubmit}
                    />
                </div>
                <hr />
                <div
                    className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
                >


                </div>
            </div>
        );
    }

export default ListingReservation;