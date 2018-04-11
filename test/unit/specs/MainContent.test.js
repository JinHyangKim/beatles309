import {{ shallow}} from 'vue-test-utils'
import MainContent from '@/components/content/MainContent'

describe('MainContent.vue', () => {

    let cmp;

    beforeEach(() => {
      cmp = shallow(() => {
         list: [{name:'음냐뤼',age:10,adr:'얌냐뤼',email:'댓'}]
      })
    })
})
