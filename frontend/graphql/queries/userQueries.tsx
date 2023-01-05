import gql from "graphql-tag";


export const AUTH_USER_GETTER_QUERY = gql`
  query AuthUser {
    authUser {
      id
      fullName
      email
      phone
      isEntrant
      isStudent
      isTeacher
      pictureUrl
      bgPictureUrl
      profile {
        id
        aboutMe
        achievements {
          id
          showInProfile
          achievement {
            title
            description
            shortDescription
            icon {
              url
              title
            }
          }
        }
        contacts {
          id
          title
          value
        }
      }
      student {
        id
        learningBuilding
        studentCard {
          cardId
        }
        group {
          name
          year
          educationForm {
            name
          }
          specialization {
            name
            faculty {
              name
              educationType {
                name
              }
            }
          }
          leader {
            fullName
            isTeacher
          }
          subjects {
            id
            name
          }
        }
      }
      teacher {
        subjects {
          id
          name
        }
        groups {
          subjects {
            id
            name
          }
        }
      }
      entrant {
        id
      }
      tags {
        id
        name
        description
      }
    }
  }
`