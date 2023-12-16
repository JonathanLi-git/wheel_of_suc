"use client";
import { useState } from 'react';
import WheelComponent from './components/wheel'
import Modal from './components/modal';

export default function Home() {

  const [modalVisible, setVisible] = useState<boolean>(false);
  const [activity, setActivity] = useState<string>("");

  const segments = [
    'Murph',
    '6 mile run',
    '6 mile ruck',
    '300 pushups',
    '100 pull ups',
    'Cold shower',
    '10 sets calf',
    '1 mile farmer'
  ]

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner: string) => {
    setVisible(true)
    setActivity(winner)
  }
const closeModal = () => {
  setVisible(false);
}
  return (
<<<<<<< HEAD
    <main className="flex h-screen w-screen items-center justify-center md:p-20">
=======
    <main className="h-screen w-screen items-center justify-center md:p-20">
>>>>>>> cb3015786fffb6b138533ffb1ee6953d937dec18
      <Modal text={activity} visible={modalVisible} close={closeModal} />
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex w-full h-full overflow-hidden justify-center h-full aspect-square bg-black">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=''
            onFinished={(winner: string) => onFinished(winner)}
            primaryColor='black'
            contrastColor='white'
            buttonText='Spin'
            isOnlyOnce={false}
            size={200}
            fontFamily='Arial'
          />
        </div>
      </div>
    </main>
  )
}
