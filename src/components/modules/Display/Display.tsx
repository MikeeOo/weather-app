import {useEffect} from "react";

import Modal from "../../elements/Modal";
import LocationCard from "../../elements/LocationCard";
import Loader from "../../atoms/Loader";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {
    deleteLocationData,
    getInitialStateFromLocalStorage,
    setApiOperationStatus,
    toggleModal
} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import {ILocationData} from "../../../types/common.types";
import {OperationStatuses} from "../../../redux/slices/locationDataSlice.types";

import {DisplayStyled} from "./Display.styled";
import H2 from "../../blocks/H2";
import Button from "../../cells/Button";
import {ModalBtnWrapper} from "../../elements/Modal/Modal.styled";

const Display = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const apiOperationStatus = useAppSelector(state => state.locationData.apiOperationStatus);

    const locationDeleteModal = useAppSelector(state => state.locationData.locationDeleteModal);

    const confirmDelete = (): void => {
        dispatch(deleteLocationData(locationDeleteModal.locationDeleteId));
        dispatch(toggleModal({showModal: false, locationDeleteId: "", locationDeleteName: ""}));
    };

    const handleReduxLoaderAndApi = (locationDataArrayLength: number): void => {
        if (locationDataArrayLength && !apiOperationStatus.message.endsWith('deleted!')) {
            dispatch(setApiOperationStatus({status: OperationStatuses.update, message: 'Updating...'}));
            dispatch(updateLocationDataArrayViaApi(locationDataArray));
        }
        else if (!locationDataArrayLength && !apiOperationStatus) {
            dispatch(setApiOperationStatus({status: OperationStatuses.idle, message: "Search for location... ;)"}));
        }
    };

    useEffect(() => {
        dispatch(getInitialStateFromLocalStorage());
        handleReduxLoaderAndApi(locationDataArray.length);
        const intervalId = setInterval(() => handleReduxLoaderAndApi(locationDataArray.length), 1000 * 60 * 10);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section>
            {locationDeleteModal.showModal && <Modal>
                <H2 fontSize="1.8rem">Do you want to delete {locationDeleteModal.locationDeleteName}?</H2>
                <ModalBtnWrapper>
                    <Button fontSize="1.2rem" padding="1em 2em" onClick={confirmDelete}>Yes</Button>
                    <Button fontSize="1.2rem" padding="1em 2em"  onClick={() => dispatch(toggleModal({showModal: false, locationDeleteId: "", locationDeleteName: ""}))}>No</Button>
                </ModalBtnWrapper>
            </Modal>}
            {apiOperationStatus.status === OperationStatuses.update && <Loader/>}
            {apiOperationStatus.status !== OperationStatuses.update && <DisplayStyled>{locationDataArray.map((location: ILocationData) => <LocationCard key={location.locationId} {...location}/>)}</DisplayStyled>}
        </section>
    );
};

export default Display;