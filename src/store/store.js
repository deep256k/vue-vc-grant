import Vue from 'vue'
import Vuex from 'vuex'
// import data from '../data/data'
// import tableData from '../data/tableData'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state :{
       fundData :[],
       tableData :[],
       charityInformation:[],
       option :'',
       formData:{},
       advisorDetails:{},
       radioInput:''
   },
   mutations:{
       changeData: (state,fundData) => {
           state.fundData = fundData
       },
       charityData:(state,tableData) =>{
           state.tableData = tableData
       },
       charityInformationData:(state,{name,EIN,Address}) =>{
           state.charityInformation.push({
               name:name,
               EIN:EIN,
               Address:Address
           })
       },
        selectedOption:(state,option)=>{
            state.option = option
        },
        reconginationData:(state,formdata)=>{
            state.formData = formdata
        },
        advisorData : (state,advisorsdata) =>{
            state.advisorDetails = advisorsdata
        },
        radioOption:(state,input) =>{
            state.radioInput = input
        }
   },
   actions:{
       commitData ({commit}){
           axios.get('http://demo2525696.mockable.io/')
           .then(res => 
            {
             const data = res;
             commit('changeData', data)
            })
           .catch(err => console.log(err))
        //    commit('changeData', data)
       },
       commitCharityData({commit}){
           axios.get('http://demo7246422.mockable.io/')
             .then(res => {
               const tableData = res;
               commit('charityData', tableData)
             })
             .catch(err => console.log(err))
           //commit('charityData', tableData)
       },
       commitcharityInformationData ({commit},selecteddata){
           commit('charityInformationData', selecteddata)
       },
       commitedOption({commit},option){
            commit('selectedOption',option)
       },
       commitreconginationData({commit},formdata){
           commit('reconginationData', formdata)
       },
       commitAdvisorData ({commit},advisorsdata) {
           commit('advisorData', advisorsdata)
       },
       commitRadioOption({commit},input){
           commit('radioOption', input)
       }
   },
   getters:{
        getData: state =>{
            return state.fundData;
        },
        getCharityData:state =>{
            return state.tableData;
        },
        getcharityInformationData: state => {
            return state.charityInformation
        },
        getOption: state =>{
            return state.option
        },
        getFormData : state =>{
            return state.formData
        },
        getAdvisorData: state =>{
            return state.advisorDetails
        },
        getRadioOption :state =>{
            return state.radioInput
        }
   }
})