import { createContext, useState } from "react";
import { Wrapper } from "../components/Wrapper";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { TwitterStep } from "../components/steps/TwitterStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";

const Steps = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export const MainContext = createContext();

const Home = () => {
  const [stepState, setStepState] = useState(0);
  const Step = Steps[stepState];
  const onNextStep = () => {
    setStepState(prev=>prev + 1);
  }

  return (
    <MainContext.Provider value={{onNextStep}}>
      <Wrapper classes="flex p-4">
        <Step/>
      </Wrapper>
    </MainContext.Provider>
  );
};

export default Home;
