#include <queue>
#include <string>
#include <iostream>
#include <fstream>

using namespace std;

ofstream out_file, log_file;    // output and log files

struct Node {

    private:
        /* private data for each node */
        int ID;                         // unique id of node
        bool USING;                     // true if using critical section
        bool ASKED;                     // true is request is sent
        Node* HOLDER;                   // next node to reach TOKEN
        queue <Node*> REQUEST_Q;        // queue to store node requests
 
        /* Handles the use of TOKEN */
        void ASSIGN_PRIVILEGE() {
            if(HOLDER==this && !USING && !REQUEST_Q.empty()) {
                HOLDER = REQUEST_Q.front();
                REQUEST_Q.pop();
                ASKED = false;
                if(HOLDER==this) {
                    USING = true;
                    // start executing its critical section
                    log_file<<"Node "<<ID<<" has entered critical section"<<endl;
                    execute();
                    HANDLE_EVENT("exit critical section", NULL);
                }
                else {
                    log_file<<"Node "<<ID<<" passed the privilege to Node "<<HOLDER->ID<<endl;
                    HOLDER->HANDLE_EVENT("privilege", NULL);
                }
            }
        }
         /* make request for the resource to the HOLDER */
        void MAKE_REQUEST() {
            if(HOLDER!=this && !REQUEST_Q.empty() && !ASKED) {
                ASKED = true;
                HOLDER->HANDLE_EVENT("request", this);
            }
        }

        /* Critical Section Code */
        void execute() {
            out_file<<"Node "<<ID<<" has executed"<<endl;
        }
 
    public:
        // << Constructor >>
        Node(int id, Node* current_dir){
            ID = id;
            USING = false;
            ASKED = false;
            HOLDER = current_dir;
        }

        /* Message handling mechanism */
        void HANDLE_EVENT(string message, Node* sender) {
            if(message=="enter critical section") {
                REQUEST_Q.push(this);
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="request") {
                log_file<<"Node "<<ID<<" received request from Node "<<sender->ID<<endl;
                REQUEST_Q.push(sender);
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="privilege") {
                HOLDER = this;
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="exit critical section") {
                log_file<<"Node "<<ID<<" exits critical section"<<endl;
                USING = false;
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
        }
};