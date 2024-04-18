import React, { useEffect, useMemo, useState } from 'react'
import './trunkFoods.css'
import {
  TTrunkFood,
  useQueryTrunkFoods,
} from '../api/trunkFoods'
import Loading from '../components/Loading'
import { Input, Select, Table, TableProps } from 'antd'

type TColumn = TableProps<TTrunkFood>['columns']
const headerConfig: Record<string, { width: number }> = {
  LocationDescription: {
    width: 220,
  },
  Schedule: {
    width: 400,
  },
}
function TrunkFoods() {
  const { data, isFetching, header, types } =
    useQueryTrunkFoods()
  const columns = useMemo<TColumn>(() => {
    return header.map((item, index) => ({
      title: item.name,
      dataIndex: item.name,
      key: item.name,
      width: 150,
      ...headerConfig[item.name],
    }))
  }, [header])

  const [filter, setFilter] = useState({
    key: '',
    type: '',
  })
  const handleTypeChange = (type: string) => {
    setFilter((filter) => ({ ...filter, type }))
  }
  const handleKeyChange = (key: string) => {
    setFilter((filter) => ({ ...filter, key }))
  }
  const filteredData = useMemo(() => {
    const { key, type } = filter
    let result = []

    result = !!type
      ? data.filter((item) => item.FacilityType == type)
      : data

    result = !!key
      ? result.filter((item) =>
          item.FoodItems?.includes(key)
        )
      : result
    return result.map((item) => ({
      ...item,
      key: item.locationid,
    }))
  }, [data, filter])

  if (isFetching) return <Loading />
  return (
    <div>
      <h3>Trunk Foods</h3>
      <div className="operation">
        <Input
          placeholder="Please type the food name you like"
          onChange={(e) => handleKeyChange(e.target.value)}
        />
        <Select
          defaultValue="Select facility type please"
          style={{ width: 300 }}
          onChange={handleTypeChange}
          options={types.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        virtual
        scroll={{ x: 2000, y: 400 }}
      />
      ;
    </div>
  )
}

export default TrunkFoods
