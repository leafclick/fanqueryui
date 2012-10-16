fan.fanqueryui.FanQueryUINativePeer = fan.sys.Obj.$extend(fan.sys.Obj);


// interop methods
function convertToJq(obj) {
    if (obj == null) throw fan.sys.Err.make("sys::Type.toFanType: obj is null");
    if (obj.$fanType == undefined) {
        obj.$fanType = fan.sys.Obj.$type;
    }
    if (fan.fanquery.Jq) {
        return fan.fanquery.Jq.make(obj);
    }
    return fan.fanquery.JqBase.make(obj);
}

function wrapInJq(self, origSelector) {
    if (self && (self.selector == origSelector)) {
        return self;
    }
    else {
        var jq = convertToJq(this);
        if (origSelector.$fanType == undefined) {
            origSelector.$fanType = fan.sys.Obj.$type;
        }
        jq.setSelectorDirect(origSelector);
        return jq;
    }
}


function convertEvent(eventObject) {
    var evt = fan.fanquery.Event.make();
    evt.setOrigEvent(eventObject);
    return evt;
}

function convertProps(map, ctx) {
    var jsMap = {};
    if (map) {
        map.$each(function (b) {
            var t = fan.sys.ObjUtil.$typeof(b.val);
            if (t.is(fan.sys.Func.$type)) {
                jsMap[b.key] = function (event, ui) {
                    var myUI = fan.fanqueryui.UI.make(convertToJq(ui));
                    var callback = b.val;
                    var cur = convertToJq(this);
                    var evt = convertEvent(event);
                    callback.call(cur, evt, myUI)
                }
            } else {
                jsMap[b.key] = b.val;
            }
        });
    }
    return jsMap;
}

// implementation

fan.fanqueryui.FanQueryUINativePeer.draggable = function (self, props) {
    var jsProps = convertProps(props, self.selector);
    if (jsProps) {
        return wrapInJq(self, self.selector.draggable(jsProps));
    }
    else {
        return wrapInJq(self, self.selector.draggable());
    }
};

fan.fanqueryui.FanQueryUINativePeer.droppable = function (self, props) {
    var jsProps = convertProps(props,  self.selector);
    if (jsProps) {
        return wrapInJq(self, self.selector.droppable(jsProps));
    }
    else {
        return wrapInJq(self, self.selector.droppable());
    }
};


fan.fanqueryui.FanQueryUINativePeer.resizable = function (self, props) {
    var jsProps = convertProps(props,  self.selector);
    if (jsProps) {
        return wrapInJq(self, self.selector.resizable(jsProps));
    }
    else {
        return wrapInJq(self, self.selector.resizable());
    }
};


fan.fanqueryui.FanQueryUINativePeer.selectable = function (self, props) {
    var jsProps = convertProps(props,  self.selector);
    if (jsProps) {
        return wrapInJq(self, self.selector.selectable(jsProps));
    }
    else {
        return wrapInJq(self, self.selector.selectable());
    }
};


fan.fanqueryui.FanQueryUINativePeer.sortable = function (self, props) {
    var jsProps = convertProps(props,  self.selector);
    if (jsProps) {
        return wrapInJq(self, self.selector.sortable(jsProps));
    }
    else {
        return wrapInJq(self, self.selector.sortable());
    }
};




