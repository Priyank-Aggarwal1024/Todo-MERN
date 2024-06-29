const Task = require("../models/task").Task;
exports.create = async (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(400).json(err)
        })

}
exports.getAll = async (req, res) => {
    Task.find().then(tasks => {
        res.json(tasks)
    }).catch(err => {
        res.status(400).json(err);
    })
}
exports.get = async (req, res) => {
    const id = req.params.id;
    Task.findById(id).then(tasks => {
        res.json(tasks)
    }).catch(err => {
        res.status(400).json(err);
    })

}
exports.replace = async (req, res) => {
    const id = req.params.id;
    Task.findOneAndReplace({ _id: id }, { ...req.body }).then(tasks => {
        res.json(tasks)
    }).catch(err => {
        res.status(400).json(err);
    })
}
exports.update = async (req, res) => {
    const id = req.params.id;
    Task.findOneAndUpdate({ _id: id }, { title: "Walking" }).then(tasks => {
        res.json(tasks)
    }).catch(err => {
        res.status(400).json(err);
    })
}
exports.delete = async (req, res) => {
    const id = req.params.id;
    Task.findOneAndDelete({ _id: id }).then(tasks => {
        res.json(tasks)
    }).catch(err => {
        res.status(400).json(err);
    })
}