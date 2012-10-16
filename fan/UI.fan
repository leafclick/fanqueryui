using fanquery

@Js
@Serializable
class UI {
    private Obj delegate
    new make(Obj d)
    {
        this.delegate = d
    }

    native JqBase helper
    native JqBase draggable
    native Coordinate position
    native Coordinate offset
}
