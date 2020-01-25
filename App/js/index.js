// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar2")
                .setItems([
                    {
                        "id":"menu-docs",
                        "sub":[
                            {
                                "id":"menu-about",
                                "caption":"Overview"
                            },
                            {
                                "id":"menu-guidance",
                                "caption":"Guidance"
                            },
                            {
                                "id":"menu-justification",
                                "caption":"Justification"
                            },
                            {
                                "id":"menu-training",
                                "caption":"Training",
                                "disabled":true
                            },
                            {
                                "id":"image",
                                "caption":"image",
                                "imageClass":"xui-icon-xui",
                                "disabled":true
                            },
                            {
                                "type":"split"
                            },
                            {
                                "id":"checkbox 1",
                                "caption":"checkbox 1",
                                "type":"checkbox"
                            },
                            {
                                "id":"checkbox 2",
                                "caption":"checkbox 2",
                                "type":"checkbox"
                            }
                        ],
                        "caption":"Docs"
                    },
                    {
                        "id":"menu-data",
                        "sub":[
                            {
                                "id":"2020data",
                                "caption":"2020 Data"
                            },
                            {
                                "id":"2019data",
                                "caption":"2019 Data",
                                "disabled":true
                            },
                            {
                                "type":"split"
                            },
                            {
                                "id":"reports sub menu",
                                "caption":"Reports",
                                "add":"[Ctrl+R]",
                                "sub":[
                                    {
                                        "id":"onboard",
                                        "caption":"HR Onboard Report"
                                    },
                                    {
                                        "id":"orgdetail",
                                        "caption":"Organization Detail Report"
                                    },
                                    {
                                        "id":"statuscode",
                                        "caption":"Agency Summary Status Code Report"
                                    },
                                    {
                                        "id":"orgcriteriacode",
                                        "caption":"Organization Summary Criteria Code Report"
                                    },
                                ]
                            }
                        ],
                        "caption":"Data"
                    },
                    {
                        "id":"menu-previous",
                        "sub":[
                            {
                                "id":"normal",
                                "caption":"normal"
                            },
                            {
                                "id":"disabled",
                                "caption":"disabled",
                                "disabled":true
                            },
                            {
                                "id":"image",
                                "caption":"image",
                                "imageClass":"xui-icon-xui"
                            },
                            {
                                "type":"split"
                            },
                            {
                                "id":"checkbox 1",
                                "caption":"checkbox 1",
                                "type":"checkbox"
                            },
                            {
                                "id":"checkbox 2",
                                "caption":"checkbox 2",
                                "type":"checkbox"
                            }
                        ],
                        "caption":"Previous"
                    },
                    {
                        "id":"menumanager",
                        "sub":[
                            {
                                "id":"sub menu 1",
                                "caption":"sub menu 1",
                                "add":"[Ctrl+F]",
                                "sub":[
                                    {
                                        "id":"sub 1",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 2",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 3"
                                    }
                                ]
                            },
                            {
                                "id":"sub menu 2",
                                "caption":"sub menu 2",
                                "add":"[Ctrl+T]",
                                "sub":[
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption":"Manager"
                    }
                ])
                .setTop("1.6666666666666667em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});