import d3cloud from 'd3-cloud';

export default function Tagcloud() {
    const words = [{
        text: "Cars", 
        size: 100
    }, 
    {
        text: "Pollution",
        size: 30
    }];
    const layout = d3cloud()
        .size([500, 500])
        .words(words)
    debugger;
    console.log(layout);

    return (<svg>
        {layout.words().map(w => {
            console.log(w)
            return <text key={w.text}>w.text</text>;
        })}
    </svg>);
}