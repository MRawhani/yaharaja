 import * as moment from 'moment'
 const getCategoryEnglish = category =>{
    if(category==='فلة') return 'villa'
    else  if(category==='شقة') return 'appartment'
    else  if(category==='أرض') return 'land'
    else  if(category==='بيت') return 'house'
    else return 'otherTypes'
}
const getRangeOfDates = (startAt, endAt, dateFormat)=>{
    const tempDates =[];
    const mEndAt = moment(endAt);
    let mstartAt = moment(startAt);

    while(mstartAt < mEndAt){
        tempDates.push(mstartAt.format(dateFormat));
        mstartAt = mstartAt.add(1,'day');
    }

    tempDates.push(mEndAt.format(dateFormat));

    return tempDates;
}
const getCategoriesArray=()=>{
    return [{value:'شقة',text:'شقة'},{value:'بيت',text:'بيت'},{value:'غرفة',text:'غرفة'},{value:'فلة',text:'فلة'}]
    }
    const getCoinsArray=()=>{
        return [{value:'$',text:'دولار'},{value:'YER',text:'ريال يمني'},{value:'SAR',text:'ريال سعودي'}]
        }
export default {
    getCategoryEnglish,
    getRangeOfDates,
    getCategoriesArray,
    getCoinsArray
}