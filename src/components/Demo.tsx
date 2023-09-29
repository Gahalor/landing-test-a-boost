import { useState } from "react"
import './drag_and_drop.css'
import data from './data/demoData.json'
import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ReactCanvasConfetti from "react-canvas-confetti";
const Demo = () => {
  const [user, setUser] = useState('Scout')
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const addScore = (points) => {
    var newScore = score + points
    setScore(newScore)
  }

  // const canvasStyles = {
  //   position: 'fixed',
  //   pointterEvents: 'none',
  //   width: '100%',
  //   height: '100%',
  //   top: 0,
  //   left: 0
  // }

  const solution = data[0].solution

  const [points, setPoints] = useState(100)
  const [check, setCheck] = useState(false)
  const [buttonLabel, setButtonLabel] = useState("Let's try it")
  const [options, setOptions] = useState(data);

  const getList = (list) => {
    return options.filter(item => item.list === list)
  }

  const getId = (id) => {
    return options.filter(item => item.id === id)
  }

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemKey', item.key)
  }

  const draggingOver = (evt) => {
    evt.preventDefault();
  }

  // makeShot = (particleRatio, opts) => {
  //   this.animationInstance && this.animationInstance({
  //     ...opts,
  //     origin: { y: 0.7 },
  //   })
  // }

  const onDrop = (evt, list) => {
    const itemKey = evt.dataTransfer.getData('itemKey');
    const item = options.find(item => item.key == itemKey);
    item.list = list;

    const newState = options.map(option => {
      if (option.key === itemKey) return item;
      return option
    })

    setOptions(newState);
  }


  /* ----------TEST----------- */
  var order = [0, 0, 0];

  const selection = (step, chose) => {
    order[step - 1] = chose;
  }

  const test = () => {
    console.log('solution:', solution, '| Testing:', order)
    for (let i = 0; i < solution.length; ++i) {
      if (solution[i] !== order[i]) {
        setPoints(points - 25)
        if (points <= 25) {
          setCheck(true)
        }
        console.log('incorrecto')
        setButtonLabel('Try again')
        return false;
      }
    }
    setCheck(true)
    addScore(points)

    console.log('correct')
    if (points == 100) {
      setButtonLabel('Awesome!')
    }
    if (points == 75) {
      setButtonLabel('Great!')
    }
    if (points == 50) {
      setButtonLabel('Good!')
    }
    if (points == 25) {
      setButtonLabel("It's ok!")
    }
    return true;
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="demo" className={`flex flex-col items-center py-4 ${styles.paddingX}`}>
      <div data-aos="zoom-in-up" className={`flex flex-col ${styles.paddingY}  ${styles.paddingX}`}>


        <div className="h-10 bg-[#0059F7] rounded-t-lg flex justify-center items-center ">
          <div className="w-full flex flex-row mx-3">
            <div className="bg-[#FF5F57] w-3 h-3 mx-1 rounded-full" />
            <div className="bg-[#FFBD2E] w-3 h-3 mx-1 rounded-full" />
            <div className="bg-[#28CA42] w-3 h-3 mx-1 rounded-full" />
          </div>
          <div className="w-full h-6 bg-[#3179F9] rounded" />
          <div className="w-full flex flex-row" />
        </div>
        <div className="border border-[#1F2C58] px-12 pt-12 pb-5 rounded-b-lg ">

          <div className="flex flex-row mb-8 h-20 ">

            {getId(1).map(item => (
              <div className='w-full flex flex-row' key={item.id} >

                <div className="w-1/6 bg-slate-700 text-left flex justify-between items-center">
                  <p className="w-full text-center text-2xl font-semibold">{item.id}</p>
                </div>
                <div className="bg-slate-700 mx-2 px-6 flex items-center">
                  <p className="text-left text-sm">
                    {item.challenge}
                  </p>
                </div>
                <div className="h-full w-1/3 bg-slate-700 flex flex-row pl-6 text-sm">
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row text-left">
                      <p className="text-slate-500">Type</p>
                    </div>
                    <div className="flex flex-row text-left">
                      <p className="text-slate-500">Level</p>
                    </div>
                    <div className="flex flex-row text-left">
                      <p className="text-slate-500">Bonus</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row text-left">
                      <p className="ml-2 font-bold">{item.type}</p>
                    </div>
                    <div className="flex flex-row text-left">
                      <p className="ml-2 font-bold">{item.level}</p>
                    </div>
                    <div className="flex flex-row text-left">
                      <p className="ml-2 font-bold">{item.bonus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>

          <div className='drag-and-drop mb-8'>

            <div className='column column--1'>
              <h3 className="text-slate-500 mb-2 font-bold">
                Paso 1
              </h3>
              <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                {getList(1).map(item => (
                  <div className='dd-element' key={item.key} draggable onDragStart={(evt) => startDrag(evt, item)}>
                    <strong className='title'>{item.title}</strong>
                    <p className='text-sm mt-2'>{item.body}</p>
                    {selection(1, item.key)}
                  </div>
                ))}
              </div>
            </div>

            <div className='column column--2'>
              <h3 className="text-slate-500 mb-2 font-bold">
                Paso 2
              </h3>
              <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                {getList(2).map(item => (
                  <div className='dd-element' key={item.key} draggable onDragStart={(evt) => startDrag(evt, item)}>
                    <strong className='title'>{item.title}</strong>
                    <p className='text-sm mt-2'>{item.body}</p>
                    {selection(2, item.key)}
                  </div>
                ))}
              </div>
            </div>

            <div className='column column--3'>
              <h3 className="text-slate-500 mb-2 font-bold">
                Paso 3
              </h3>
              <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                {getList(3).map(item => (
                  <div className='dd-element' key={item.key} draggable onDragStart={(evt) => startDrag(evt, item)}>
                    <strong className='title'>{item.title}</strong>
                    <p className='text-sm mt-2'>{item.body}</p>
                    {selection(3, item.key)}
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-slate-100 rounded-lg w-2/5 overflow-hidden h-48'>
              <div className='w-full flex flex-row h-full'>

                <div className="w-full bg-slate-600">
                  <div className='flex flex-col'>
                    <div className="pt-2">
                      <strong className='text-white text-sm'>Test</strong>
                    </div>
                    <div className="flex flex-col text-white mt-2 px-4">
                        <button className='py-6 px-2 bg-slate-800' disabled={check} onClick={() => test()}>
                          <p className='text-md font-bold'>{buttonLabel}</p>
                        </button>

                      <strong className='fomt-bold mt-3 text-2xl'>{points}</strong>
                      <p className="font-semibold text-xs">POINTS</p>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className='flex flex-col'>
                    <div className="pt-2">
                      <strong className='text-black text-sm'>Opportunities</strong>
                    </div>

                    <div className="grid grid-cols-1 gap-1 text-black mt-4 pl-14">
                      <div className="flex flex-row text-sm mb-2">
                        <div className={`w-5 h-5 ${points == 100 ? 'bg-slate-500' : 'bg-slate-300'} rounded-full`} />
                        <p className="ml-4">100</p>
                      </div>
                      <div className="flex flex-row text-sm mb-2">
                        <div className={`w-5 h-5 ${points == 75 ? 'bg-slate-500' : 'bg-slate-300'} rounded-full`} />
                        <p className="ml-4">75</p>
                      </div>
                      <div className="flex flex-row text-sm mb-2">
                        <div className={`w-5 h-5 ${points == 50 ? 'bg-slate-500' : 'bg-slate-300'} rounded-full`} />
                        <p className="ml-4">50</p>
                      </div>
                      <div className="flex flex-row text-sm mb-2">
                        <div className={`w-5 h-5 ${points == 25 ? 'bg-slate-500' : 'bg-slate-300'} rounded-full`} />
                        <p className="ml-4">25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=''>
              <h3 className="text-white font-bold mb-4">
                Drag & Drop
              </h3>
              <div className='dd-zone flex-row' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 0))}>
                {getList(0).map(item => (
                  <div className='dd-element w-[189px]' key={item.key} draggable onDragStart={(evt) => startDrag(evt, item)}>
                    <strong className='title'>{item.title}</strong>
                    <p className='text-sm mt-2'>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="font-base mt-5 text-slate-100/80">
              ¿Cuáles de estos componentes construyen la respuesta correcta?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo