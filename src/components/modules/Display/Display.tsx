import {useEffect} from "react";

import {ILocationData, RequestStatus} from "../../../types/common.types";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {deleteLocationData, getInitialStateFromLocalStorage, setLocationRequestState, toggleModal} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";
import {DisplayStyled} from "./Display.styled";
import {ModalBtnWrapper} from "../../elements/Modal/Modal.styled";
import Loader from "../../atoms/Loader";
import H2 from "../../blocks/H2";
import Button from "../../cells/Button";
import Modal from "../../elements/Modal";
import LocationCard from "../../elements/LocationCard";

const Display = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);
    const locationRequestState = useAppSelector(state => state.locationData.locationRequestState);
    const locationDeleteModal = useAppSelector(state => state.locationData.locationDeleteModal);

    const confirmDelete = (): void => {
        dispatch(deleteLocationData(locationDeleteModal.locationDeleteId));
        dispatch(toggleModal({showModal: false, locationDeleteId: "", locationDeleteName: ""}));
    };

    useEffect(() => {
        dispatch(getInitialStateFromLocalStorage());
    }, []);

    useEffect(() => {
        if (locationDataArray.length) {
            const intervalId = setInterval((): void => {
                dispatch(setLocationRequestState({status: RequestStatus.update, message: 'Updating...'}));
                dispatch(updateLocationDataArrayViaApi(locationDataArray));
            }, 1000 * 60 * 15);
            return () => clearInterval(intervalId);
        }
    }, [locationDataArray]);

    return (
        <section>
            {locationDeleteModal.showModal &&
                <Modal>
                    <H2 fontSize="1.8rem">Do you want to delete {locationDeleteModal.locationDeleteName}?</H2>
                    <ModalBtnWrapper>
                        <Button fontSize="1.2rem" padding="1em 2em" onClick={confirmDelete}>Yes</Button>
                        <Button fontSize="1.2rem" padding="1em 2em" onClick={() => dispatch(toggleModal({showModal: false, locationDeleteId: "", locationDeleteName: ""}))}>No</Button>
                    </ModalBtnWrapper>
                </Modal>}
            {locationRequestState.status === RequestStatus.update && <Loader/>}
            {locationRequestState.status !== RequestStatus.update && <DisplayStyled>{locationDataArray.map((location: ILocationData) => <LocationCard key={location.locationId} {...location}/>)}</DisplayStyled>}
        </section>
    );
};

export default Display;