const addDays = require('date-fns/fp/addDays')

class Dataset {
    constructor() {
        this.familyMembers = {
            dad: 'John Doe',
            mom: 'Jane Doe',
            son: 'Jacob Doe',
            daughter: 'Jessica Mae',
            sonInLaw: 'Tim Mae',
        }
        this.chores = [
            {
                task: 'Pickup Medication',
                status: 'ASSIGNED',
                assignedOn: addDays(-3, new Date()),
                completedOn: null,
                assignedTo: 'dad'
            },
            {
                task: 'Trim the hedges',
                status: 'PENDING',
                assignedOn: addDays(-5, new Date()),
                completedOn: null,
                assignedTo: 'son'
            },
            {
                task: 'Pay council bill',
                status: 'ASSIGNED',
                assignedOn: addDays(-1, new Date()),
                completedOn: null,
                assignedTo: 'dad'
            },
            {
                task: 'Pickup weed killer from bunnings',
                status: 'ASSIGNED',
                assignedOn: addDays(-2, new Date()),
                completedOn: null,
                assignedTo: 'mom'
            },
            {
                task: 'Take Jacob for dental work',
                status: 'COMPLETED',
                assignedOn: addDays(-5, new Date()),
                completedOn: new Date(),
                assignedTo: 'sonInLaw'
            },
            {
                task: 'Take moms car for a wash',
                status: 'ASSIGNED',
                assignedOn: addDays(-8, new Date()),
                completedOn: null,
                assignedTo: 'daughter'
            },
            {
                task: 'Buy groceries for family picnic',
                status: 'COMPLETED',
                assignedOn: addDays(-2, new Date()),
                completedOn: new Date(),
                assignedTo: 'mom'
            },
            {
                task: 'Pickup Medication',
                status: 'ASSIGNED',
                assignedOn: addDays(-1, new Date()),
                completedOn: null,
                assignedTo: 'son'
            },
        ]
    }

    getChoreCountForFamilyMember(memberName) {
        const chores = this.chores.filter(({ assignedTo, status }) => assignedTo === memberName && ['PENDING','ASSIGNED'].includes(status)) || []
        return chores.length
    }

    getPendingChoreCountForFamilyMember(memberName) {
        const chores = this.chores.filter(({
                                               assignedTo,
                                               status
                                           }) => assignedTo === memberName && status === 'PENDING') || []
        return chores.length
    }
}


module.exports = Dataset