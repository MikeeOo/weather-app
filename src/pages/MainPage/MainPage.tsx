import Search from "../../modules/main_page/Search";
import Display from "../../modules/main_page/Display";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useState} from "react";

const MainPage = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const [locationInput, setLocationInput] = useState<string>(``);

    const [locationInputTooShort, setLocationInputTooShort] = useState<boolean>(false);

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const locationDataLoader = useAppSelector(state => state.locationData.locationDataLoader);

    return (
      <>

          <Search
              dispatch={dispatch}
              locationInput={locationInput}
              setLocationInput={setLocationInput}
              locationInputTooShort={locationInputTooShort}
              setLocationInputTooShort={setLocationInputTooShort}
              locationDataArray={locationDataArray}
              locationDataLoader={locationDataLoader}/>

          <Display
              dispatch={dispatch}
              locationDataArray={locationDataArray}
              locationDataLoader={locationDataLoader}/>
      </>
  );
};

export default MainPage;