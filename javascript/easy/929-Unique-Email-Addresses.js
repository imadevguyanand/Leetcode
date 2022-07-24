/**
 * @param {string[]} emails
 * @return {number}
 * @complexities Time => O(n * m) | Space => O(n), where n is the number emails in the input and m is the maximum email string length
 * @description HashTable
 */
var numUniqueEmails = function (emails) {
  const hashTable = []
  const length = emails.length
  for (let i = 0; i < length; i++) {
    let email = emails[i]
    let validEmail = validEmailRules(email)
    pushToHashTable(hashTable, validEmail)
  }

  return Object.keys(hashTable).length
}

const pushToHashTable = (hashTable, email) => {
  if (!(email in hashTable)) {
    hashTable[email] = true
  }
}

const validEmailRules = (email) => {
  let validLocalName = ""
  let split = email.split("@")
  let domain = split[1]
  let localName = split[0]
  for (let i = 0; i < localName.length; i++) {
    let character = localName[i]
    if (character === ".") {
      continue
    }

    if (character === "+") {
      return validLocalName + "@" + domain
    }

    validLocalName += character
  }

  return validLocalName + "@" + domain
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
