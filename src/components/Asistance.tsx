import { useState } from "react"
import './drag_and_drop.css'
import data from './data/demoData.json'
import styles from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ReactCanvasConfetti from "react-canvas-confetti";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const Asistance = () => {
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

                <div className="bg-slate-700 mx-2 px-6 flex items-center">
                  <p className="text-left text-sm">
                    {item.challenge}
                    {/* <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                        rounded-lg 
                        border 
                        w-full 
                        p-4 
                        px-3 
                        md:px-6 
                        focus-within:shadow-sm
                        grid
                        grid-cols-12
                        gap-2
                        "
                        >

                        <FormField
                          name="prompt"
                          render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-10">
                              <FormControl className="m-0 p-0">
                                <Input
                                  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                  disabled={isLoading}
                                  placeholder="Simple toggle button using react hooks."
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                          Generate
                        </Button>
                      </form>
                    </Form> */}

                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Asistance