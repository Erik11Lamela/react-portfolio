import React, {Component} from 'react'
import { Grid, Cell,DataTable,TableHeader } from 'react-mdl'
class WorkExpAndEducation extends Component {
    render() {
        return (
        <div>
            <Grid className = "w-e">
                <Cell col = {6} className = "education-design">
                    <h2> Education </h2>
                    <hr/>
                <DataTable  className = "education-table"                  
                    shadow={0}
                    rowKeyColumn="id"
                    rows={[
                        {id: 1001, Years: '2006-2017', facility: 'School 9', averageGrade: '4/5', specialization: 'Physics, Math'},
                        {id: 1002, Years: '2017-...', facility: 'HSE', averageGrade: '7.6/10', specialization: 'IT in business'},
                       

                     ]}>
                    <TableHeader name="Years" tooltip="period of time"> Years </TableHeader>
                    <TableHeader name="facility" tooltip="name of the facility"> Facility </TableHeader>
                    <TableHeader name="averageGrade" tooltip="average grade"> Average grade </TableHeader>
                    <TableHeader name="specialization" tooltip="specialization or faculty"> Specialization </TableHeader>
                   
                </DataTable>
                </Cell>
                <Cell col = {6} className = "work-exp-design">
                     <h2> Work experience </h2>
                     <hr />
                     <Grid>
                         <Cell col = {4}>
                            <p>2020  <br/> (1 month)</p>
                         </Cell>
                         <Cell col = {8}>
                            <p>ООО "Веб Депо"</p>
                            "Веб Депо" is an IT company that provides hosting services. I worked there as an intern for 1 month and had to build a web application that updates JSON files.
                         </Cell>
                     </Grid>
                     
                </Cell>
            </Grid>
            <h2> My GitHub repositories: </h2>
            <p> <img alt = "No icon found"   height="80px" width = 'auto' src="https://w0.pngwave.com/png/490/316/computer-icons-github-github-icon-png-clip-art-thumbnail.png" />  <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/Erik11Lamela?tab=repositories"> GitHub Repositories</a></p>
        </div>
         )
    }
}

export default WorkExpAndEducation
