import { gql } from "@apollo/client";


// SIGN-UP MUTATION
export const SIGNUP_FREELANCER_MUTATION =
        gql`
        mutation createUser(
        $accountType: String! 
        $email: String!
        $password: String!
        ){
            createUser(accountType: $accountType, email: $email, password: $password){
                freelancer {
                    userId
                    freelancerId
                    email
                }
            }
        }
        `;

export const SIGNUP_CLIENT_MUTATION =
        gql`
        mutation createUser(
        $accountType: String! 
        $email: String!
        $password: String!
        ){
            createUser(accountType: $accountType, email: $email, password: $password){
                client {
                    userId
                    clientId
                    email
                }
            }
        }
        `;