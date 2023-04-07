export interface ColorType {
    id: number,
    name: string,
    color: string
}

const colorList: ColorType[] = [
    {
        id: 1,
        name: "기본",
        color: "#6366F1"
    },
    {
        id: 2,
        name: "다크",
        color: "#111827"
    },
    {
        id: 3,
        name: "오렌지",
        color: "#F97316"
    },
    {
        id: 4,
        name: "사이언",
        color: "#06B6D4"
    },
    {
        id: 5,
        name: "핑크",
        color: "#EC4899"
    }
]

export default colorList