import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { WelcomeStep } from '../components/WelcomeStep';
import { EnterNameStep } from '..//components/EnterNameStep';
import { TwitterStep } from '../components/TwitterStep';
import { ChooseAvatarStep } from '../components/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/EnterPhoneStep';

const Steps = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep
}

export default function Home() {
  const [stepState,setStepState] = React.useState(0);
  const Step = Steps[stepState];
  return (
      <Wrapper classes="flex">
        <Step setStepState={setStepState}/>
      </Wrapper>
  )
}
