const ss = require('superstruct')
const parseISO = require('date-fns/fp/parseISO')
const isDate = require('date-fns/fp/isDate')

const ISODateString = ss.define('ISODateString', value => isDate(parseISO(value)))

const FamilyMemberResponse = ss.object({
    dad: ss.string(),
    mom: ss.string(),
    son: ss.string(),
    daughter: ss.string(),
    sonInLaw: ss.string(),
})

const ChoreResponse = ss.object({
    id: ss.integer(),
    assignedTo: ss.enums(['dad','mom','son','daughter','sonInLaw']),
    task: ss.string(),
    status: ss.enums(['ASSIGNED', 'PENDING', 'COMPLETED']),
    assignedOn: ISODateString,
    completedOn: ss.nullable(ISODateString),
})

const CreateChoreRequest = ss.object({
    assignedTo: ss.enums(['dad','mom','son','daughter','sonInLaw']),
    task: ss.size(ss.string(), 10, 200),
})

const UpdateChoreRequest = ss.object({
    assignedTo: ss.enums(['dad','mom','son','daughter','sonInLaw']),
    task: ss.string(),
    status: ss.enums(['ASSIGNED', 'PENDING', 'COMPLETED']),
})

module.exports = {
    ISODateString,
    FamilyMemberResponse,
    ChoreResponse,
    CreateChoreRequest,
    UpdateChoreRequest,
}