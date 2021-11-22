const DataSetClass = require('./dataset')


test('should have family members initialized', () => {
    // Arrange
    const dataset = new DataSetClass()
    // Act
    // Assert
    expect(dataset.familyMembers).toBeDefined()
})

test('should have some chores initialized', () => {
    // Arrange
    const dataset = new DataSetClass()
    // Act
    // Assert
    expect(dataset.chores).toBeDefined()
    expect(dataset.chores.length > 0).toBe(true)
})

test('should return nonzero chore count for family member', () => {
    // Arrange
    const dataset = new DataSetClass()
    // Act
    // Assert
    expect(dataset.getChoreCountForFamilyMember('dad') > 0).toBe(true)
})

test('should return nonzero PENDING chore count for family member', () => {
    // Arrange
    const dataset = new DataSetClass()
    // Act
    // Assert
    expect(dataset.getPendingChoreCountForFamilyMember('son') > 0).toBe(true)
})