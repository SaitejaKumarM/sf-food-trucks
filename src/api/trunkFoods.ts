import { SetStateAction, useEffect, useState } from "react";

export type TTrunkFood = Record<string, string>


type TTrunkFoodHeader = { key: string; name: string; }

export function useQueryTrunkFoods() {
    const [list, setList] = useState<TTrunkFood[]>([])
    const [data, setData] = useState<TTrunkFood[]>([])
    const [types, setTypes] = useState<string[]>([])
    const target = `https://data.sfgov.org/api/views/rqzj-sfat/rows.csv`; //file

    const [header, setHeader] = useState<TTrunkFoodHeader[]>([])
    const [isFetching, setIsFetching] = useState(false)
    useEffect(() => {
        setIsFetching(true)
        fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
                //'Authorization': //in case you need authorisation
            }
        }).then(res => res.text()).then(data => {
            setList(csvToArr(data))
        }).finally(() => {
            setIsFetching(false)
        })

    }, [setList, setIsFetching])
    useEffect(() => {
        if (list.length >= 1) {
            const header = list?.[0] // header row
            const headerItems: { key: string; name: string; }[] = []
            const data = list.slice(1)

            const types = new Set<string>()
            Object.keys(header).forEach((key) => {
                // key: 0 - 28
                const name = header[key]
                data.forEach((row) => {
                    row[name] = row[key]
                    // delete row[key]
                    types.add(row["FacilityType"])

                })
                headerItems.push({
                    key: name,
                    name
                })

            })
            setData(data)
            setHeader(headerItems)
            setTypes(Array.from(types).filter((item) => !!item))
        }
    }, [setHeader, setData, list])

    return { data, header, isFetching, types }
}

function csvToArr(stringValue: string): TTrunkFood[] {
    // create empty array
    const csvData = [];

    // this will return each line as an individual String
    const lines = stringValue.split("\n");

    // loop through the lines and return an array of individual   
    // Strings within the line that are separated by a comma

    for (let i = 0; i < lines.length; i++) {
        csvData[i] = lines[i].split(",");
    }

    // return an array of arrays 2D array
    // e.g [ [1,2,3], [3,4,5], [6,7,8] ]
    return csvData as unknown as TTrunkFood[];

}