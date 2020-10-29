import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class ChartDoughnut extends Component {
    render() {
        return (
            <div style={{height:"1000px", width: "1000px", margin: "auto"}}>
                <Line
                    data={{
                        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", 
                        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10","Tháng 11","Tháng 12"],
                        datasets: [
                            {
                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 221, 111, 106],
                                label: "Số lượng sản phẩm",
                                borderColor: "#3e95cd",
                                fill: false
                            },
                            {
                                data: [100, 350, 411, 502, 635, 809, 947, 1402, 635, 267, 350, 411],
                                label: "Doanh thu (triệu)",
                                borderColor: "#8e5ea2",
                                fill: false
                            }
                        ]
                    }}
                    options={{
                        title: {
                            display: true,
                            text: "Thống kê doanh thu theo năm"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }}
                />
            </div>
        )
    }
}
