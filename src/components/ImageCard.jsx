import React, { useEffect, useRef, useState } from 'react'

const ImageCard = (props) => {
  // constructor ... 初期表示に必要な処理を書く
  // constructor(props) {
  //   super(props) // 親componentのconstructorを呼び出せる-> this.propsを使えるようになる
  //   this.state = { spans: 0 }
  //   this.imageRef = React.createRef() // componentの子の動作を切欠に親から再表示したくなるケースに利用 取得画像の高さによってList全体の表示を整えたいため
  // }
  const [spans, setSpans] = useState(0)
  const imageRef = useRef(null)
  const calculateSpans = () => {
    const height = imageRef.current.clientHeight
    setSpans(Math.ceil(height / 10))
  }

  // componentDidMount() { // Reactライフサイクルに従いよびだされる関数であり「初期化されたときに呼び出す」などすでにタイミングが決まっている
  //   this.imageRef.current.addEventListener("load", this.setSpans)
  // }
  useEffect(() => { // componentをrenderするたびにcomponent全体のsnapshotを取りその差分を使って動く
    imageRef.current.addEventListener("load", calculateSpans)
  })
  const { description, urls } = props.image

  // setSpans = () => {
  //   const height = this.imageRef.current.clientHeight
  //   const spans = Math.ceil(height / 10)
  //   this.setState({ spans })
  // }

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div >
  )

}

export default ImageCard
