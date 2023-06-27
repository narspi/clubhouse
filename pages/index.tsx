import { SetStateAction,Dispatch } from "react";

import { createContext, useState } from "react";
import { Wrapper } from "../components/Wrapper";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { ImportFromStep } from "../components/steps/ImportFromStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";

const Steps = {
  0: WelcomeStep,
  1: ImportFromStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

interface ITMainContext {
  setStepState: Dispatch<SetStateAction<number>>;
  onNextStep: () => void;
  userData: Object;
  setUserData: Dispatch<SetStateAction<{}>>;
}

export const MainContext = createContext<ITMainContext>({} as ITMainContext);

const Home = () => {
  const [stepState, setStepState] = useState(0);
  const [userData, setUserData] = useState({});
  const Step = Steps[stepState];
  const onNextStep = () => {
    setStepState(prev=>prev + 1);
  }

  return (
    <MainContext.Provider value={{setStepState,onNextStep,userData,setUserData}}>
      <Wrapper classes="flex p-4">
        <Step/>
      </Wrapper>
    </MainContext.Provider>
  );
};

export default Home;
